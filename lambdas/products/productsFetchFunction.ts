import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda'

export async function handle(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {

  const method = event.httpMethod
  const lambdaRequestId = context.awsRequestId
  const apiRequestId = event.requestContext.requestId

  console.log(`API Gateway RequestId: ${apiRequestId} - Lambda  RequestId: ${lambdaRequestId}`)

  if(event.resource == '/products'){
    if(method == 'GET')  {
      const products = 'Product OK'
      return {
        statusCode: 200,
        body: JSON.stringify(products)
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
