#!/bin/bash 
rg '<Navbar.*/>' -n --no-heading -g '!/rip.sh' | awk '{
    split($0,f,":");           # split $0 into array of fields `f`
    sub(/^([^:]+:){2}/,"",$0); # remove first two "fields" from `$0` 
    print "file name- " f[1] " \nline no.- " f[2] "\ncontent- " $0
}' > output.txt