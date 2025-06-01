# ArtExpress: A Cultural Odyssey on Rails

An AI-powered, data-driven Streamlit application that transforms India’s luxury train tourism into an immersive cultural journey—combining real-time analytics, personalized recommendations, gamified learning, blockchain-verified artisan marketplaces, and 360° digital twins to showcase traditional art forms, support local artisans, and promote sustainable travel.

---

## Table of Contents

1. [Key Features](#key-features)  
2. [Architecture Overview](#architecture-overview)  
3. [Tech Stack](#tech-stack)  
4. [Getting Started](#getting-started)  
   1. [Prerequisites](#prerequisites)  
   2. [Installation](#installation)  
   3. [Configuration](#configuration)  
   4. [Running the App](#running-the-app)  
5. [Usage Guide](#usage-guide)  
6. [Project Structure](#project-structure)  
7. [Contributing](#contributing)  
8. [License](#license)  
9. [Contact & Acknowledgements](#contact--acknowledgements)  

---

## Key Features

1. **AI-Powered Journey Personalization**  
   -  Cultural-DNA profiling & multimodal recommendations  
   -  Weather, crowd, festival-aware itinerary optimization  

2. **Real-Time Cultural Analytics**  
   -  IoT-enabled environmental & crowd monitoring  
   -  Predictive demand forecasting & low-impact destination suggestions  

3. **Gamified Cultural Learning**  
   -  “Cultural Karma” points, achievement badges & challenges  
   -  Social “Cultural Crews” for collaborative exploration  

4. **Blockchain-Verified Artisan Marketplace**  
   -  GI-tag authentication & secure provenance tracking  
   -  Direct artisan workshop booking & e-commerce  

5. **Immersive Digital Twin Experiences**  
   -  360° previews of train interiors & heritage sites  
   -  Interactive, annotated 3D/2D art form exploration  

6. **Sustainability & Accessibility**  
   -  Live carbon-footprint tracking & eco-score dashboard  
   -  Multilingual audio guides, sign language overlays, tactile descriptions  

7. **Comprehensive Data Integration & Visualization**  
   -  Snowflake Data Cloud + data.gov.in + IRCTC + Ministry of Tourism  
   -  Dynamic dashboards: Plotly, Altair, Seaborn  

---

## Architecture Overview

┌───────────────────┐    Real-Time IoT    ┌───────────────────┐  
│   Streamlit UI    │◀──────────────────▶│   Edge­Sensors     │  
│ -  Personalization │                    │ -  Air/Temp/Noise   │  
│ -  Dashboards      │                    │ -  Crowd Counts     │  
└───────────────────┘                      └───────────────────┘  
        │                                          │  
        │                                          │  
        ▼                                          ▼  
┌───────────────────┐      Snowflake Data Cloud     ┌───────────────────┐  
│  AI & Analytics   │◀────────────────────────────▶│  External APIs    │  
│ -  ML Personalizer │                                │ -  Wikimedia       │  
│ -  Predictive BI   │                                │ -  Blockchain Node │  
└───────────────────┘                                └───────────────────┘  

---

## Tech Stack

- **Frontend / App**: Streamlit, HTML/CSS, JavaScript (for custom components)  
- **Data Warehouse**: Snowflake (AI Data Cloud)  
- **Visualizations**: Plotly, Altair, Seaborn, Folium, PyDeck  
- **Backend & Integrations**:  
  - Python, Pandas, NumPy, SQLAlchemy, Snowflake-Connector  
  - REST APIs for IoT sensors, Wikimedia, blockchain  
- **Blockchain**: Ethereum-based smart contracts for GI-tag authentication  
- **Hosting**: Streamlit Cloud / Heroku / AWS ECS  
- **CI/CD**: GitHub Actions, Docker  

---

## Getting Started

### Prerequisites

- Python 3.9+  
- Snowflake account & credentials  
- Ethereum node endpoint (Infura / Alchemy)  
- IoT sensor API keys (if deploying real sensors)  

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-org/ArtExpress.git
cd ArtExpress

# 2. Create & activate a virtual environment
python3 -m venv venv
source venv/bin/activate

# 3. Install Python dependencies
pip install -r requirements.txt
```

### Configuration

1. Copy `.env.example` → `.env`  
2. Populate environment variables:

```
SNOWFLAKE_ACCOUNT=your_account
SNOWFLAKE_USER=your_user
SNOWFLAKE_PWD=your_password
SNOWFLAKE_WAREHOUSE=COMPUTE_WH
SNOWFLAKE_DATABASE=ARTEXPRESS_DB
SNOWFLAKE_SCHEMA=PUBLIC

ETH_NODE_URL=https://mainnet.infura.io/v3/...
BLOCKCHAIN_CONTRACT_ADDRESS=0x…

IOT_API_KEY=abcdef123456
```

### Running the App

```bash
# Launch Streamlit locally
streamlit run app.py
```

Open http://localhost:8501 in your browser.

---

## Usage Guide

- **Sidebar Navigation**  
  -  Personalize Journey → enter preferences & view AI-driven itinerary  
  -  Route Map → explore luxury train stops & cultural highlights  
  -  Analytics Dashboard → live visitor, environmental, sustainability metrics  
  -  Art Explorer → click states to discover art forms & festivals  
  -  Marketplace → browse GI-verified crafts & book artisan workshops  
  -  Virtual Preview → immerse in digital-twin cultural tours  
  -  Settings → manage profile, data sources, accessibility options  

- **Earning Cultural Karma**  
  Complete quizzes, attend virtual workshops, rate experiences → redeem points for discounts on curated journeys.

---

## Project Structure

```
├── app.py                  # Streamlit main entrypoint
├── components/             # Custom Streamlit components
├── data/                   # Static data & sample JSONs
├── iot/                    # IoT ingestion scripts
├── ml/                     # Models for personalization & forecasting
├── pages/                  # Streamlit multi-page modules
│   ├── 01_personalize.py
│   ├── 02_map.py
│   └── ...
├── smart_contracts/        # Solidity contracts for GI-tag auth
├── utils/                  # Helpers: Snowflake, blockchain, logging
├── requirements.txt
├── Dockerfile
└── README.md
```

---

## Contributing

We welcome all contributions! Please:

1. Fork the repository  
2. Create a feature branch: `git checkout -b feature/YourFeature`  
3. Commit your changes: `git commit -m "Add YourFeature"`  
4. Push to your fork: `git push origin feature/YourFeature`  
5. Submit a Pull Request  

Please follow our [Code of Conduct](CODE_OF_CONDUCT.md) and [Contribution Guidelines](CONTRIBUTING.md).

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## Contact & Acknowledgements

Developed by the ArtExpress Team  
For questions or demos, reach out to art-express@yourdomain.com  

Special thanks to:  
- Ministry of Tourism, data.gov.in, Indian Railways for open data  
- OpenStreetMap, Wikimedia Commons for imagery & maps  
- The global open-source community for libraries & frameworks  

Enjoy your Cultural Odyssey on Rails! 🚂🎨

---
Answer from Perplexity: pplx.ai/share
