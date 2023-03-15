#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import { ProductAppStack  } from '../lib/productsApp-stack'
import { ProductQualifierApiStack } from '../lib/productQualifierApi-stack'


const app = new cdk.App()

const env: cdk.Environment = {
  account: '791950794107',
  region: 'us-east-2',
}

const tags = {
  cost: 'product-qualifier',
  team: 'FernandoBritto'
}


const productsAppStack = new ProductAppStack(app, 'ProductsApp', {
  tags: tags,
  env: env
})


const productQualifierApiStack = new ProductQualifierApiStack(app, 'ProductQualifierApi', {
  productsFetchHandler: productsAppStack.productsFetchHandler,
  tags: tags,
  env: env
})
productQualifierApiStack.addDependency(productsAppStack)
