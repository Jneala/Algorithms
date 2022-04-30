# Using slicing
string = "cats"
slicedString = string[::-1]
print(slicedString)

# Using loop
reversedString=''
index = len(string)
while index > 0:
    reversedString += string[index - 1]
    index = index - 1
print(reversedString)

# Using join
joinedString = ''.join(reversed(string))
print(joinedString)