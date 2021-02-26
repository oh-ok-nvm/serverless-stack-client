const config = {
    STRIPE_KEY: "pk_test_51IP0MWHnLqsAKN62InZY45wpwOZ2VkorxffCjmAoblE37SJPXnpptpPa9qCkfX3MLoDrXYjKdTobyml0PlUQT8MT000RajD1q2",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-2",
      BUCKET: "app-img-upload",
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://brrs51p2zg.execute-api.us-east-2.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_IItaPLl8z",
      APP_CLIENT_ID: "11bhi30o26g66anqgrcb9605ru",
      IDENTITY_POOL_ID: "us-east-1:d031f7c5-e54c-4013-b097-b1861df9c622",
    },
  };
  
  export default config;