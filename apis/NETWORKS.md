The following are a list of available API endpoints for Networks at [http://localhost:3000/networks](http://localhost:3000/networks)

## Networks entity
```
id: number;  // primary key - auto generated
name: string;
description: string;
type: NetworkTypes;
```

## Network types
```
WIRED = 'Wired',
WIFI = 'WIFI'
```

## Get All networks
```bash
curl --location --request GET 'http://localhost:3000/networks'
```

## Create Network
```bash
curl
    --location --request POST 'http://localhost:3000/networks' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode 'name=GozrehBlasterN' \
    --data-urlencode 'type=WIFI' \
    --data-urlencode 'description=GozrehBlaster N for video devices'
```

## Get network
```bash
curl --location --request GET 'http://localhost:3000/networks/6'
```

## Update network
```bash
curl
    --location --request PATCH 'http://localhost:3000/networks/5' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode 'name=GozrehBlasterN'
```

## Delete network
```bash
curl --location --request DELETE 'http://localhost:3000/networks/5'
```
