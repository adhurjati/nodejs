curl  http://localhost:3000/profile -i -H 'Content-Type:application/json'
echo "Get all profiles completed"
sleep 1
curl  http://localhost:3000/profile?id=0 -i -H 'Content-Type:application/json'
echo "Get profile 0 completed"
curl -X POST -d '{"username": "john", "email": "john@xyz.com", "url": "http://www.john.com"}' http://localhost:3000/profile -i -H 'Content-Type:application/json'
echo "Post completed"
curl  http://localhost:3000/profile?id=1 -i -H 'Content-Type:application/json'
echo "Get profile 1 completed"
sleep 1
curl -X PUT -d '{"username": "jim", "email": "jim@xyz.com", "url": "http://www.nnn.org"}' http://localhost:3000/profile/1 -i -H 'Content-Type:application/json'
echo "Put completed"
sleep 1
curl  http://localhost:3000/profile?id=1 -i -H 'Content-Type:application/json'
echo "Get updated profile 1 completed"
sleep 1
curl  -X DELETE http://localhost:3000/profile/1
echo "Delete profile 1 completed"
sleep 1
curl  http://localhost:3000/profile -i -H 'Content-Type:application/json'
echo "Get all profiles completed"