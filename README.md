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