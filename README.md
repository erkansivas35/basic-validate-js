# Basic Validate JS - No jQuery!

### Example:

**Text Validate**

```html
  <input id="txtName" type="text" placeholder="Name">
```

```javascript
  textControl('txtName'); // return true or false
```

**E-Mail Validate**

```html
  <input id="txtMail" type="email" placeholder="Email">
```

```javascript
  emailControl('txtMail'); // return true or false
```

**Regex Validate**

```javascript
    var numberPattern = /^(([0-9]*)|(([0-9]*)\.([0-9]*)))$/;
    patternControl('1234567890', numberPattern); // return true or false
```