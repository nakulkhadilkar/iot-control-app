# IoT Control App

## Adding Controls
1. Select "Controls"
2. Select "Manage Controls"
3. Enter a JSON array of controls using the appropriate formatting

```javascript
[{
	"name": "Switch 1",
	"control": "switch",
	"source": {"type":"thingspeak_channel", "field":1, "readKey":"XXX", "writeKey":"YYY"}
}]
```

## Demo
* [Open IoT Control App for ThingSpeak](https://htmlpreview.github.io/?https://github.com/nothans/iot-control-app/blob/master/controls.html)
* Create a new private ThingSpeak channel and enable 3 fields
* Add controls_example.json under "Manage Controls"
* Change readKey and writeKey to match your ThingSpeak channel settings

![IoT Control App screenshot](./controls_example.png 'IoT Control App screenshot')
