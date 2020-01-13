def checkUniqueness (array) :
    i = 0
    j = 1
    currentElement = ""
    nextElement = ""
    isUnique = False

    while i < len(array):
        currentElement = array[i]
        while j < len(array):
            nextElement = array[j]
            if currentElement == nextElement:
                isUnique = False
                print(currentElement)
            else :
                isUnique = True
            j = j+1
        j = 0
        i = i+1

tab = ["foo","bar","baz","foo"]

checkUniqueness(tab)
