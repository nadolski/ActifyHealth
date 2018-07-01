#!/usr/bin/python

import csv, json, sys

def csv_to_json():
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
                # continue
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

def main():
    csv_to_json()

if __name__ == '__main__':
    main()