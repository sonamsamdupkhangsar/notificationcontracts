# Mobile App Notification contract

# Generate code for job
```
ag document-asyncapi.yaml @asyncapi/nodejs-template -o output -p server=mosquitto --force-write
```

## cd to generated output folder
```
cd output && ls
```

## Run code
```
npm install
```

## Start application
```
npm start
```

### In another terminal install mqtt library
```
npm install mqtt -g
```

### send correct message
```
mqtt pub -t 'document/requested' -h 'test.mosquitto.org' -m '{"event": "DocumentRequested", "id": 1, "name": "Working 9-5 at Molly place"}'
```