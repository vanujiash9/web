
# Dự án Dự đoán Ung thư phổi (Lung Cancer Prediction)

Dự án này nhằm **phân tích** và **xây dựng mô hình** để dự đoán khả năng mắc **ung thư phổi** (LUNG_CANCER) dựa trên một số đặc điểm nhân khẩu học và lối sống (hút thuốc, lo âu, vàng ngón tay, …). Qua đó, ta có thể đánh giá các yếu tố rủi ro liên quan đến ung thư phổi và **xác định mô hình phân loại** tối ưu.

## 1. Giới thiệu

- **Dữ liệu**: Tệp `survey lung cancer.csv` (nguồn: [Kaggle](https://www.kaggle.com/datasets?search=lung+cancer) hoặc tài nguyên nội bộ).  
- **Mục tiêu**: Dự đoán biến `LUNG_CANCER` (có/không) dựa trên các biến về giới tính, tuổi, thói quen hút thuốc, v.v.  
- **Công cụ**: Python (Pandas, NumPy, Matplotlib, Seaborn, scikit-learn), Google Colab hoặc Jupyter Notebook.

## 2. Các bước chính

### 2.1. Đọc dữ liệu & Khám phá

1. **Đọc file** `survey lung cancer.csv` bằng `pandas`.  
2. **Thông tin cột**:  
   - `GENDER`, `AGE`, `SMOKING`, `YELLOW_FINGERS`, `ANXIETY`, `PEER_PRESSURE`, `CHRONIC DISEASE`, `FATIGUE `, `ALLERGY `, `WHEEZING`, `ALCOHOL CONSUMING`, `COUGHING`, `SHORTNESS OF BREATH`, `SWALLOWING DIFFICULTY`, `CHEST PAIN`, `LUNG_CANCER`.  
3. **Loại bỏ trùng lặp (duplicates)**, kiểm tra thiếu dữ liệu.  
4. **Mã hóa nhãn** (LabelEncoder) cho cột `GENDER` và `LUNG_CANCER`.  

### 2.2. Khám phá phân bố và quan hệ biến

- **Thống kê mô tả** (`df.describe()`).  
- **Phân phối mục tiêu**: Biểu đồ `countplot` cho `LUNG_CANCER`.  
- **So sánh** tỉ lệ `LUNG_CANCER=0/1` khi nhóm theo từng biến phân loại (hàm `plot(col)`).  
- **Ma trận tương quan** (`heatmap`) để xem biến nào liên quan mạnh đến `LUNG_CANCER`.  
- **Tạo biến tương tác** (ví dụ `ANXYELFIN = ANXIETY * YELLOW_FINGERS`) để thể hiện tác động kết hợp.

### 2.3. Tiền xử lý

- **Loại bỏ cột ít liên quan** (`GENDER, AGE, SMOKING, SHORTNESS OF BREATH`) nếu chúng có tương quan thấp với `LUNG_CANCER`.  
- **Cân bằng dữ liệu** (nếu dữ liệu lệch nhãn) bằng phương pháp **ADASYN** hoặc **SMOTE**.

### 2.4. Chia dữ liệu

- **X** = các biến độc lập sau khi loại bớt cột không cần thiết.  
- **y** = cột `LUNG_CANCER`.  
- **Train/Test split**: `train_test_split(X, y, test_size=0.25, random_state=0)`.

### 2.5. Huấn luyện mô hình MLPClassifier

- **MLPClassifier** (thuộc `sklearn.neural_network`):  
  ```python
  mlp_model = MLPClassifier()
  mlp_model.fit(X_train, y_train)
  ```
- Dự đoán trên tập test, in `classification_report`, ma trận nhầm lẫn (confusion matrix).

### 2.6. Đánh giá mô hình

- **Accuracy**: Tỷ lệ dự đoán đúng trên tập test.  
- **Precision, Recall, F1-score**: Từ `classification_report`.  
- **Confusion matrix**: Số TP, FP, TN, FN.  
- **K-Fold Cross Validation** (10-fold) để tính **accuracy trung bình** của mô hình.  

## 3. Kết quả & Nhận xét

- Mô hình MLPClassifier cho **độ chính xác ~95%** trên tập test (confusion matrix cho thấy ít sai sót).  
- Tập dữ liệu sau khi cân bằng (ADASYN) giúp mô hình học tốt hơn các trường hợp trước đây ít xuất hiện.  
- **Outliers** và **biến tương tác** (như `ANXIETY * YELLOW_FINGERS`) có thể làm rõ ảnh hưởng kết hợp của nhiều yếu tố.

## 4. Hướng phát triển

1. **Thử thêm mô hình khác** (Logistic Regression, RandomForest, XGBoost) để so sánh.  
2. **Hyperparameter Tuning**: Tinh chỉnh số lượng neuron, hidden layers, learning rate,… cho MLP.  
3. **Feature Engineering**: Tạo thêm biến tương tác khác, hoặc biến rời rạc (binning) cho `AGE`.  
4. **Triển khai**: Nếu muốn áp dụng thực tế, xây dựng pipeline thu thập dữ liệu bệnh nhân, dự đoán online.

## 5. Cách chạy

1. Clone repo (hoặc tải notebook `.ipynb`):
   ```bash
   git clone https://github.com/username/lung-cancer-prediction.git
   ```
2. Mở notebook `lung_cancer_prediction.ipynb` trên Colab/Jupyter.  
3. Cập nhật đường dẫn đến file `survey lung cancer.csv` nếu cần.  
4. Chạy tuần tự các cell để xem kết quả.

## 6. Tài liệu tham khảo

- [scikit-learn: Neural Network models (MLP)](https://scikit-learn.org/stable/modules/neural_networks_supervised.html)  
- [ADASYN Imbalanced Data Handling](https://imbalanced-learn.readthedocs.io/en/stable/generated/imblearn.over_sampling.ADASYN.html)  
- [Matplotlib, Seaborn Documentation](https://matplotlib.org/, https://seaborn.pydata.org/)

---

### Tác giả
- **Tên**: Bùi Thị Thanh Vân
- **Email**: thanh.van19062004@gmail.com
- **Ghi chú**: Mọi góp ý, vui lòng mở issue hoặc liên hệ email trên.
