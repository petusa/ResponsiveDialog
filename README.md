# ResponsiveDialog
Lightweight dialog presenter for any screens built on top of [jQuery Mobile](http://jquerymobile.com/).

Check the [DEMO page](http://www.responsivedialog.com) showing it's usage.

# Features

- Separates creating dialog pages from host page creation

  You can design and add dialogs separately, preview them alive simply opening their html pages, then present them with one line of code in your original host HTML via it's programmatic API.

- Leaves your original host page intact

  It does not mess up your host page, not even runtime. It does not manipulate and extend the live DOM of your host page as it loads in and uses a separate overlay iframe. This iframe handles the jQuery Mobile based dialogs from external sources. It also means you can freely combine it with any web frontend frameworks.

- UI responsive and touch enabled

  As it is guaranteed by jQuery Mobile.

# Usage

- Step 1: Design your dialog page following the jQuery Mobile dialog markup in a separate HTML file.

You can simply grab and modify the provided [dialog_template.html](dialogs/dialog_template.html).

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
        <div data-role="dialog" data-theme="a">
            <div data-role="header">
                <h1>
                    Name your dialog
                </h1>
            </div>
            <div role="main" class="ui-content">
                <p>
                    Place content here
                </p>
                <br>
                <div class="img-container">
                    <div class="centerer"></div>
                        <img src="<ADD IMAGE HERE THAT WILL SCALE AUTOMATICALLY>" alt="Your scalable image." />
                    </div>
                <br>
                <br>
                <p>
                    You can place another content here.
                </p>
                <br>
                <a href="responsivedialog.html" data-role="button">
                    Close the dialog
                </a>
                <a href="https://github.com/petusa/ResponsiveDialog" target="_blank" data-role="button">
                    Open external page
                </a>
            </div>
        </div>
    </body>
</html>
```

- Step 2: Copy [responsivedialog.html](dialogs/responsivedialog.html) in the same folder where your dialog page is created. Preferably all the dialog pages are located along with the responsivedialog.html under the **dialogs/** folder. In other cases you need to specify the *dialogsFolder* parameter when initializing the ResponsiveDialog object:
```javascript
ResponsiveDialog.init({ 
    dialogsFolder:"/myDialogsFolder", 
    ... 
  });
```

- Step 3: Include responsivedialog.js in your host HTML page. As ResponsiveDialog builts on jQuery Mobile which relies on jQuery in turn do not forget to include a proper jQuery version as well.
```html
<script type="text/javascript" src="http://responsivedialog.com/responsivedialog.js"></script>
```

- Step 4: Present your dialogs with the API

Initialize the ResponsiveDialog, you can also catch close events here:
```javascript
<script type="text/javascript">
    $(document).ready(function(){
        ResponsiveDialog.init({
            onDialogsReady: function(){ console.log("ResponsiveDialog ready"); },
            onDialogClosed: function(id){ console.log("responsive dialog with id '" + id + "' closed"); }
        });
    });
</script>
```

Open a dialog:
```html
<a href="#" onclick="ResponsiveDialog.showDialog('dialog_template.html');return false;">
    Open the dialog
</a>
```

Close dialogs:
```html
 <a href="#" onclick="ResponsiveDialog.closeDialogs();return false;">
    Close dialogs
 </a>
```

# Testing

Do not forget to run your project from an HTTP server in order to test it out.

For that [nginx](http://nginx.org/) or the excellent [live-server](https://github.com/tapio/live-server) is recommended.

The simpliest way to start is to download the [ResponsiveDialog project](https://github.com/petusa/ResponsiveDialog/archive/master.zip) and serve the donwloaded folder via HTTP (nginx, or live-server), then navigate to sample.html.
