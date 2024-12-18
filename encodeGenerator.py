import cv2
import face_recognition
import pickle
import os

# importing the data base images
folderImagesPath = 'Resources/images'
imgList = []
studentIds = []

for path in os.listdir(folderImagesPath):
    imgList.append(cv2.imread(os.path.join(folderImagesPath, path)))
    studentIds.append(os.path.splitext(path)[0])

print(len(imgList))
print(studentIds)