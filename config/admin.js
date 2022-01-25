module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '99d5fb607cb85661906d5ec2220ca77b'),
  },
});
