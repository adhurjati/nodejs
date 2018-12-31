
#gets post data
printf "Here are all the posts:\n"
curl "http://localhost:3000/posts" 
printf "\n"
#posts post data
curl -H "Content-Type: application/json" -X POST -d '{"name": "Top 10 ES6 Features", "url":"http://webapplog.com/es6", "text": ""}'  "http://localhost:3000/posts" 
printf "Added a new post. Here are all the posts now:\n"
curl "http://localhost:3000/posts" 
printf "\n"
sleep 1
#updates post data at specific id
curl -H 'Content-Type: application/json' -X PUT -d '{"name": "Top 10 ES6 Features Every Developer Must Know", "url":"http://webapplog.com/es6", "text": ""}' "http://localhost:3000/posts/1"
printf  "Updated post 1. Here are all the posts now:\n"
curl "http://localhost:3000/posts" 
printf "\n"
sleep 1
#deletes post data at specific id
curl -X DELETE "http://localhost:3000/posts/1"
printf  "Deleted post 1. Here are all the posts now:\n"
curl "http://localhost:3000/posts" 
printf "\n"
sleep 1

#gets comment data
printf "\n"
printf "Comments for post id = 0:\n"
curl "http://localhost:3000/posts/0/comments" 
printf "\n"
sleep 1
#posts comment data
curl -H "Content-Type: application/json" -X POST -d '{"text": "This is neat!"}'  "http://localhost:3000/posts/0/comments" 
printf "Posted a new comment for post id = 0\n"
#gets comment data
printf "Comments for post id = 0\n"
curl "http://localhost:3000/posts/0/comments" 
printf "\n"
sleep 1
#updates comment data at specific id
curl -H 'Content-Type: application/json' -X PUT -d '{"text": "This is updated!"}' "http://localhost:3000/posts/0/comments/3"
printf "Updated the comment with comment id = 0 for post id = 0\n"
#gets comment data
printf "Comments for post id = 0\n"
curl "http://localhost:3000/posts/0/comments" 
printf "\n"
sleep 1
#deletes comment data at specific id
curl -X DELETE "http://localhost:3000/posts/0/comments/3"
printf "Deleted the comment with comment id = 3 for post id = 0\n"
#gets comment data
printf "Comments for post id = 0\n"
curl "http://localhost:3000/posts/0/comments" 