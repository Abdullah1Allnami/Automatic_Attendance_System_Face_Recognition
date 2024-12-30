import os
import pickle
import cv2
import face_recognition
import numpy as np
import cvzone

if __name__ == '__main__':
    cap = cv2.VideoCapture(0)
    cap.set(3, 640)  # width
    cap.set(4, 480)  # height

    # Load Encoding file
    print('Loading Encoded file ...')
    file = open('encodeFile2.p', 'rb')
    encodeListKnownWithIds = pickle.load(file)
    file.close()
    print('Encode File Loaded')
    encodeListKnown, studentIds = encodeListKnownWithIds

    # importing the modes images to list
    imgBackground = cv2.imread('Resources/background.png')
    folderModePath = 'Resources/Modes'
    imgModelList = []
    for path in os.listdir(folderModePath):
        imgModelList.append(cv2.imread(os.path.join(folderModePath, path)))

    # Get the real time face detection's frames
    while True:
        ret, img = cap.read()

        if ret:
            imgS = cv2.resize(img, None, fx=0.25, fy=0.25)
            imgS = cv2.cvtColor(imgS, cv2.COLOR_BGR2RGB)

            # Get the faces in the image
            faceCurFrame = face_recognition.face_locations(imgS)
            # Encode the faces detected in the image
            encodeCurFrame = face_recognition.face_encodings(imgS, faceCurFrame)

            imgBackground[162:162 + 480, 55:55 + 640] = img
            imgBackground[44:44 + 633, 808:808 + 414] = imgModelList[1]

            # compare the detected faces in the web cap with the encoded photos in the dataBase
            for encodedFace, faceLoc in zip(encodeCurFrame, faceCurFrame):
                matches = face_recognition.compare_faces(encodeListKnown, encodedFace)
                faceDistances = face_recognition.face_distance(encodeListKnown, encodedFace)
                matchIndex = np.argmin(faceDistances)
                if matches[matchIndex]:
                    # print('Face-With-Id:', studentIds[matchIndex])
                    y1, x2, y2, x1 = faceLoc
                    y1, x2, y2, x1 = y1 * 4, x2 * 4, y2 * 4, x1 * 4
                    bbox = 55 + x1, 162 + y1, x2 - x1, y2 - y1
                    imgBackground = cvzone.cornerRect(imgBackground, bbox, rt=0)

                print(studentIds[matchIndex])
            cv2.imshow("Back ground image", imgBackground)

            if cv2.waitKey(1) == 27:
                break

    cap.release()
    cv2.destroyAllWindows()
