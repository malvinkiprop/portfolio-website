# Explainable AI for Maternal Health Risk Stratification in Kenya

## Project goal
This project explores an explainable machine-learning approach to identify women who may miss a timely postnatal care (PNC) check in Kenya. The intended use is to support research and help health teams consider where follow-up may be needed; it is not a clinical diagnosis or a substitute for professional judgement.

## Data and preparation
- Uses the Kenya Demographic and Health Survey pregnancy and postnatal-care recode.
- The notebook reports 10,505 unique women in the final modelling dataset.
- The target is whether a postnatal check was missed within the first two days after childbirth.
- GPS data is reserved for mapping and is explicitly excluded from model predictors.
- The workflow covers data validation, cleaning, exploratory analysis, train/test splitting, class-imbalance handling, model comparison, threshold review, and SHAP-based explainability.

## Model comparison
The notebook compares Logistic Regression with untuned and tuned XGBoost models. The tuned XGBoost model reports the following held-out test results at the default 0.5 threshold:

| Metric | Result |
|---|---:|
| PR-AUC | 0.628 |
| ROC-AUC | 0.790 |
| Precision | 0.590 |
| Recall | 0.610 |
| F1 score | 0.600 |

The notebook also examines an F1-oriented threshold of 0.458, reporting precision 0.562, recall 0.658, and F1 0.606. Threshold choice changes the balance between identifying more potential missed-PNC cases and limiting false alerts.

## Explainability
The workflow uses SHAP global and local explanations to inspect which predictors contribute to model outputs and to make individual predictions more interpretable.

## Technologies and methods
Python, pandas, NumPy, scikit-learn, XGBoost, model evaluation, threshold selection, and SHAP.

## Important limitations
These are experimental model results, not evidence of clinical effectiveness. Predictions should not be used to deny care or make decisions about an individual without validation, appropriate safeguards, and human oversight. Survey data should be handled according to its access and confidentiality conditions; raw survey and GPS files are not included in this portfolio page.
