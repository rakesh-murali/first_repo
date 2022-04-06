a = 'abaabbaaaa'
arr = []
prev_index = 0
max_len = 0
value = ''
total_count= 0
for i in range(len(a)):
  added_i = i+1
  if (i == len(a)-1):
    arr.append(a[prev_index:])
    value = a[prev_index:]
  elif (a[i] != a[added_i]):
    arr.append(a[prev_index:added_i])
    value = a[prev_index:added_i]
    prev_index = i+1
  if (max_len < len(value)):
    max_len = len(value)
print(arr)
for v in arr:
  if (len(v) != max_len):
    print(v)
    total_count += (max_len - len(v))

print(total_count)


