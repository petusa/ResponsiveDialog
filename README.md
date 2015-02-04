# ResponsiveDialog
Lightweight dialog presenter for any screens built on top of jQuery Mobile.

# Features

- Separates creating dialog pages from host page
  
  You can design and add dialogs separately, preview them alive simply opening their html pages, then present them with one line of code in your original host HTML via it's programmatic API.

- Leaves your original host page intact

  It does mess up your host page, not even runtime. It does not manipulate and extend the live DOM of your host page as it loads in and uses a separate overlay iframe. This iframe handles the jQuery Mobile based dialogs from external sources.

- Ui responsive and touch enabled

# Usage

- Step 1: Design your dialog page following the jQuery Mobile dialog markup in a separate HTML file. 

```html
<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1">
	    <link rel="stylesheet" href="//code.jquery.com/mobile/1.4.4/jquery.mobile-1.4.4.min.css" />
	    <link rel="stylesheet" href="//responsivedialog.com/responsivedialog.css" />
	    <script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
	    <script src="//code.jquery.com/mobile/1.4.4/jquery.mobile-1.4.4.min.js"></script>
	</head>
	<body>
		<div data-role="dialog">
			<div data-role="header" data-theme="a">
				<h1>
					Name your dialog
				</h1>
			</div>
			<div role="main" class="ui-content">
				<p>
					Place content here
				</p>
				<div class="img-container">
					<div class="centerer"></div>
			        <img src="<ADD IMAGE HERE THAT WILL SCALE AUTOMATICALLY>" alt="Your scalable image." />
			    </div
				<p>
					You can place another content here.
				</p>
				<a href="responsivedialog.html" data-role="button" data-theme="a">
					Close the dialog
				</a>
				<a href="http://<AN EXTERNAL LINK>" target="_blank" data-role="button" data-theme="a">
					Open external page
				</a>
			</div>
		</div>
	</body>
</html>
```

- Step 2: Copy responsivedialog.html and responsivedialog.css in the same folder where your dialog page is created. You may use the css file in your dialog page as to center and scale your dialog embedded images.

- Step 3: Include responsivedialog.js in your HTML (either locally or remotely)
```html
<script type="text/javascript" src="http://responsivedialog.com/responsivedialog.js"></script>
```

- Step 4: Present your dialogs with the API
```html
<a href="#" onclick="ResponsiveDialog.showDialog('dialog_template.html');return false;">Open the dialog</a>
```
