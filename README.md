# simpleWebserver
Assignment 6 : Creating a Simple Web Server with Node.js


1st}  i import three required nodejs modules ( http, fs, path ) and declare a PORT 3000 where my server runs
2nd}  i made a async function servefile and passes three params ( rs, filePath, status = 200)
        and in this function i use try for error handing
3rd} i declare server and create server and make a async funtion then i let filepatha and use it in 
      switch case break function for serving pages on the basis of fileepath and also set a default for error time.
4rt} i start server and request for listen server on 3000 port. and print a messege in terminal that show when my server is running.
