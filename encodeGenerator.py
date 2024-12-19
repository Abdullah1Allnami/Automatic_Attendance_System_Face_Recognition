import cv2
import face_recognition
import pickle
import os

# importing the database images
folderImagesPath = 'Resources/images'
imgList = []
studentIds = []

for path in os.listdir(folderImagesPath):
    fullPath = os.path.join(folderImagesPath, path)
    img = cv2.imread(fullPath)
    if img is None:
        print(f"Failed to load image: {fullPath}")
        continue
    imgList.append(img)
    studentIds.append(os.path.splitext(path)[0])


# to encode all the database images
def getEncoding(imagesList):
    encodingList = []
    for img in imagesList:
        if img is None:
            print("Skipping empty image.")
            continue
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        try:
            encode = face_recognition.face_encodings(img)[0]
            encodingList.append(encode)
        except IndexError:
            print("No face found in image. Skipping.")
    return encodingList


print("Encoding Started ...")
encodeListKnown = getEncoding(imgList)
encodeListKnown = [encodeListKnown, studentIds]  # add the Ids
print("Encoding Complete")

# Save to file
with open('encodeFile.p', 'wb') as file:
    pickle.dump(encodeListKnown, file)
print('File Saved')
