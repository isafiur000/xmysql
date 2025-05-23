This is patched clone of o1lab/xmysql (https://github.com/o1lab/xmysql)
\
This patch adds basic authentication. You can use the password with this script:
\
`sudo apt install python3-bcrypt` \

\
Make a python script and execute: 

```
import getpass
import bcrypt

password = getpass.getpass("password: ")
hashed_password = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())
print(hashed_password.decode())
```

    


