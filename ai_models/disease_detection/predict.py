from .predictor import predict_disease

if __name__ == "__main__":

    image_path = input("Enter image path: ")

    result = predict_disease(image_path)

    print("\nPrediction Result\n")

    print(result)