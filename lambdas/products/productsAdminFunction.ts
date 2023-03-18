import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda'
import { Product, ProductRepository } from './layers/productsLayer/nodejs/productRepository'
import { DynamoDB } from 'aws-sdk'
// import * as AWSXRay from 'aws-xray-sdk'

// AWSXRay.captureAWS(require('aws-sdk'))

const productDdb = process.env.PRODUCT_DDB!
const ddbClient = new DynamoDB.DocumentClient()

const productRepository = new ProductRepository(ddbClient, productDdb)


export async function handle(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {

  const lambdaRequestId = context.awsRequestId
  const apiRequestId = event.requestContext.requestId

  console.log(`API Gateway RequestId: ${apiRequestId} - Lambda  RequestId: ${lambdaRequestId}`)

  const method = event.httpMethod
  if(event.resource == '/products'){

    const product = JSON.parse(event.body!) as Product
    const productCreated = await productRepository.createProduct(product)
    return {
      statusCode: 201,
      body: JSON.stringify(productCreated)
    }
  } else if(event.resource === '/product/{id}') {
    const productId = event.pathParameters!.id as string
    if(method === 'PUT'){
      const product = JSON.parse(event.body!) as Product
      try {
        const productUpdated = await productRepository.updateProduct(productId, product)

        return {
          statusCode: 200,
          body: JSON.stringify(productUpdated)
        }
      } catch (ConditionalCheckFailedException) {
        return {
          statusCode: 404,
          body: 'Product not found'
        }
      }

    }else if(method === 'DELETE'){
      try {
        const product = await productRepository.deleteProduct(productId)
        return {
          statusCode: 200,
          body: JSON.stringify(product)
        }
      } catch (error) {
        console.error((<Error>error).message)
        return {
          statusCode: 404,
          body: (<Error>error).message
        }
      }
    }
  }

  return {
    statusCode: 400,
    body: JSON.stringify({
      message: 'Bad reguest'
    })
  }
}

