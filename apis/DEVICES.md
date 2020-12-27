The following are a list of available API endpoints for Networks at [http://localhost:3000/devices](http://localhost:3000/devices)

## Devices entity
```
id: number;  // primary key - auto generated
name: string;
description: string;
os: string;
dhcp: boolean;
ipAddress: string;
macAddress: string
network: Networks;
```

## OS types
```
MAC = 'Mac',
WINDOWS = 'Windows',
LINUX = 'Linux',
ANDROID = 'Android',
IOS = 'iOS',
SAMSUNG = 'Samsung',
VIZIO = 'Vizio',
FIRETV = 'FireTV',
ROKU = 'Roku',
XBOX = 'Xbox',
PLAYSTATION = 'Playstation',
CHROMECAST = 'Chromecast',
CHROMEBOOK = 'Chromebook',
OTHER = 'Other'
```

## Get All devices
```bash
curl --location --request GET 'http://localhost:3000/devices'
```

## Create devices
```bash
curl
    --location --request POST 'http://localhost:3000/devices' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode 'name=Pixel2XL-Phone' \
    --data-urlencode 'description=Dave'\''s Android phone' \
    --data-urlencode 'os=Android' \
    --data-urlencode 'dhcp=true' \
    --data-urlencode 'macAddress=AA:44:A1:47:DC:E6' \
    --data-urlencode 'networkId=6'
```

## Get device
```bash
curl --location --request GET 'http://localhost:3000/devices/2'
```

## Update device
```bash
curl
    --location --request PATCH 'http://localhost:3000/devices/2' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode 'dhcp=true'
```

## Delete device
```bash
curl --location --request DELETE 'http://localhost:3000/devices/3'
```
