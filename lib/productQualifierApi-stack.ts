import * as cdk from 'aws-cdk-lib'
import * as cwlogs from 'aws-cdk-lib/aws-logs'
import * as apigateway from 'aws-cdk-lib/aws-apigateway'
import * as lambdaNodeJS from 'aws-cdk-lib/aws-lambda-nodejs'

import {Construct} from 'constructs'

interface ProductQualifierApiStackProps extends cdk.StackProps {
  productsFetchHandler:  lambdaNodeJS.NodejsFunction
  productsAdminHandler:  lambdaNodeJS.NodejsFunction
}


export class ProductQualifierApiStack extends cdk.Stack{

  constructor(scope: Construct,id: string, props: ProductQualifierApiStackProps){
    super(scope, id, props)

    const logGroup = new cwlogs.LogGroup(this, 'ProductQualifierApiLogs')

    const api = new apigateway.RestApi(this, 'ProductQualifierApiStack', {
      restApiName: 'ProductQualifierApi',
      cloudWatchRole: true,
      deployOptions: {
        accessLogDestination: new apigateway.LogGroupLogDestination(logGroup),
        accessLogFormat: apigateway.AccessLogFormat.jsonWithStandardFields({
          httpMethod: true,
          ip: true,
          protocol: true,
          requestTime: true,
          resourcePath: true,
          responseLength: true,
          status: true,
          caller: true,
          user: true
        })
      }
    })

    const productsFetchIntegration = new apigateway.LambdaIntegration(props.productsFetchHandler)

    const productsResource = api.root.addResource('products')
    productsResource.addMethod('GET', productsFetchIntegration)

    const productIdResource = api.root.addResource('{id}')
    productIdResource.addMethod('GET', productsFetchIntegration)

    const productsAdminIntegration = new apigateway.LambdaIntegration(props.productsAdminHandler)

    // POST
    productsResource.addMethod('POST', productsAdminIntegration)

    // PUT
    productIdResource.addMethod('PUT', productsFetchIntegration)

    // DELETE
    productIdResource.addMethod('DELETE', productsFetchIntegration)

  }
}
