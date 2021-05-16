import io
import re
import json

lines = []

with io.open('vyhlaska50.txt','r',encoding='utf8') as f:
  for line in f.readlines():
    line = line.strip();
    if line == '':
      continue
    line = re.search(r"^(\d+).\t(.+):(.+)", line)

    number = line[1].strip()
    question = line[2].strip()
    answer = line[3].strip()

    if answer[0] == '-':
      answer = answer[1:]
    if answer[-1] == '.':
      answer = answer[:-1]
    answer = answer.strip()

    data = {
      'number': int(number),
      'question': question,
      'answer': answer
    }

    lines.append(data)


print('export default' + json.dumps(lines) + ';')
