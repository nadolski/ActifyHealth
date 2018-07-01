#!/usr/bin/python

import csv
import json
# import requests

def google_to_csv():
    print "google_to_csv", 
    # DOC_URL = "https://docs.google.com/spreadsheets/d/1pAwG0OqzuUq-k8v3kuSwi6SctCbBZ8pG4frNKbDKwfU/edit?usp=sharing"
    # csv_content = requests.get(DOC_URL).text
    # print csv_content
    with open('ActifyHealth - Sheet1.csv', 'r') as fin:
        data = fin.read().splitlines(True)
    with open('tasks.csv', 'w') as fout:
        fout.writelines(data[1:])
    print "...ok"

def csv_to_json():
    print "csv_to_json",
    outputList = []
    outcomeType = ["pos", "neg"]
    outcomeAtts = ["StatNameList", "MinValue", "MaxValue", "OutcomeDesc"]
    with open('tasks.csv') as csv_file:
        for task in csv.DictReader(csv_file):
            # print task
            output = {}
            output["Description"] = task["Description"]

            for typ in outcomeType:
                output[typ+"Outcome"] = {}
                for att in outcomeAtts:
                    # print typ, att#, task[typ+att]
                    if att.endswith("List"):
                        val = task[typ+att].split(",")
                        val = [x.strip(' ') for x in val]
                    else:
                        val = task[typ+att]
                    output[typ+"Outcome"].update({att: val})
                    # output[att].append("{"+att+": "+task[att]+",}")

            outputList.append(output)

    # output_json = json.dumps(outputList)
    # print output_json

    with open('tasks.json', 'w') as f:
         json.dump(outputList, f)
    print "...ok"

def main():
    google_to_csv()
    csv_to_json()

if __name__ == '__main__':
    main()