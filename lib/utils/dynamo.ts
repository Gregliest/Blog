import {
  CreateTableCommand,
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
  UpdateItemCommand,
} from '@aws-sdk/client-dynamodb'

const REGION = 'us-west-2'
const LIKES_TABLE = 'likes'

const client = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  },
  region: REGION,
})

async function createLikeTable() {
  const params = {
    TableName: 'LIKES',
    KeySchema: [{ AttributeName: 'page_id', KeyType: 'HASH' }],
    AttributeDefinitions: [{ AttributeName: 'page_id', AttributeType: 'S' }],
    ProvisionedThroughput: {
      ReadCapacityUnits: 10,
      WriteCapacityUnits: 10,
    },
  }

  try {
    const data = await client.send(new CreateTableCommand(params))
    console.log('Table Created', data)
    return data
  } catch (err) {
    console.log('Error', err)
  }
}

export async function likePut(path) {
  console.log('Liked ' + path)
  const params = {
    Item: {
      page_id: { S: path },
      likes: { N: '0' },
    },

    ReturnConsumedCapacity: 'TOTAL',
    TableName: 'LIKES',
  }

  try {
    const data = await client.send(new PutItemCommand(params))
    console.log(data)
    return data
  } catch (err) {
    console.error(err)
  }
}

export async function like(path) {
  const params = {
    TableName: 'LIKES',
    Key: {
      page_id: { S: path },
    },
    ExpressionAttributeNames: {
      '#likes': 'likes',
    },
    ExpressionAttributeValues: {
      ':start': { N: '0' },
      ':incr': { N: '1' },
    },
    UpdateExpression: 'SET #likes = if_not_exists(#likes, :start) + :incr',
    ReturnValues: 'UPDATED_NEW',
  }

  try {
    const data = await client.send(new UpdateItemCommand(params))
    console.log(data)
    return data
  } catch (err) {
    console.error(err)
  }

  return ''
}

export async function getLikes(path) {
  console.log('Got likes ' + path)
  const params = {
    TableName: LIKES_TABLE,
    Key: {
      KEY_NAME: { N: path },
    },
  }

  return await client.send(new GetItemCommand(params))
}
