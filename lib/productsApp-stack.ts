import * as cdk from 'aws-cdk-lib'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as lambdaNodeJS from 'aws-cdk-lib/aws-lambda-nodejs'

import {Construct} from 'constructs'

export class ProductAppStack extends cdk.Stack{

  readonly productsFetchHandler:  lambdaNodeJS.NodejsFunction

  constructor(scope: Construct,id: string, props?:  cdk.StackProps){
    super(scope, id, props)

    this.productsFetchHandler = new lambdaNodeJS.NodejsFunction(this, 'ProductsFetchHandler', {
      functionName: 'ProductsFetchFunction',
      entry: 'lambdas/products/productsFetchFunction.ts',
      handler: 'handler',
      memorySize: 128,
      timeout: cdk.Duration.seconds(5),
      bundling: {
        minify: true,
        sourceMap: false
      }
    })

  }
}
