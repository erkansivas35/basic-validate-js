# Basic Validate JS - No jQuery!,
You can validate JavaScript forms with Basic Validate JS.

##Install

```html
    <script src="dist/form-validate.min.js"></script>
```

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

**Iban Validate**

```html
    <input id="txtIban" type="text" placeholder="Iban">
```

```javascript
    ibanControl('txtIban'); // return true or false
```

**Regex Validate**

```javascript
    var numberPattern = /^(([0-9]*)|(([0-9]*)\.([0-9]*)))$/;
    patternControl('1234567890', numberPattern); // return true or false
```