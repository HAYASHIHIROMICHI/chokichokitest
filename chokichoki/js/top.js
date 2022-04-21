$(function () {
  console.log("read");

  let array = [
    {
      text: "test1",
    },
    {
      text: "test1",
    },
    {
      text: "test1",
    },
    {
      text: "test1",
    },
    {
      text: "test1",
    },
  ];
  console.log(array);
});

// $(function () {
//   var dynamodb = new AWS.DynamoDB();
//   var params = {
//     TableName: "DogTable",
//     Item: {
//       dogId: { N: "6" },
//       name: { S: "チョキ" },
//     },
//   };
//   dynamodb.putItem(params, callback);
//   console.log(array);
// });
