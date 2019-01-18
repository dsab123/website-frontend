curl --user ${CIRCLE_TOKEN}: \
    --request POST \
    --form revision=4d8e826adfc705aad92aaf1053c9f15db8c3158d\
    --form config=@config.yml \
    --form notify=false \
        https://circleci.com/api/v1.1/project/github/dsab123/website/tree/master
