# Javascipt message box

## Usage
How to use it inside HTML file:

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <script src="msgbox.js"></script>
      </head>
      <body>
        <button onclick="msgbox1.show('Title', 'Content')">Turn on message box 1</button>

        <script>
          let msgbox1 = new MsgBox("msgbox1", retFunc, width=400, height=200, boxtype="yesnocancel");
          function retFunc(answer) {
            alert(answer)
          }
        </script>
      </body>
    </html>
