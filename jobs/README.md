# Mobile App Notification contract

# Generate code for job
```
ag job-asyncapi.yaml @asyncapi/nodejs-template -o output -p server=mosquitto
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
mqtt pub -t 'job/posted' -h 'job.mosquitto.org' -m '{"id": 1, "name": "Working 9-5 at Molly place"}'

```