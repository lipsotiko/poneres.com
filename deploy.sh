npm run generate

BUCKET="poneres"

aws s3 sync ./.output/public "s3://$BUCKET"  --delete

aws cloudfront create-invalidation --distribution-id 'EYN5JW9PLVC5J' --paths '/*'

echo "http://$BUCKET.s3-website.us-east-1.amazonaws.com"
