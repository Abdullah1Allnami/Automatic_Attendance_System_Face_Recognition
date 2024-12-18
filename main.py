import os

import cv2

if __name__ == '__main__':
    cap = cv2.VideoCapture(0)
    cap.set(3, 640)  # width
    cap.set(4, 480)  # height

    # importing the modes images to list
    imgBackground = cv2.imread('Resources/background.png')
    folderModePath = 'Resources/Modes'
    imgModelList = []

    for path in os.listdir(folderModePath):
        imgModelList.append(cv2.imread(os.path.join(folderModePath, path)))

    while True:
        ret, img = cap.read()

        if ret:
            imgBackground[162:162 + 480, 55:55 + 640] = img
            imgBackground[44:44 + 633, 808:808 + 414] = imgModelList[1]

            cv2.imshow("Back ground image", imgBackground)

            if cv2.waitKey(1) == 27:
                break

    cap.release()
    cv2.destroyAllWindows()
