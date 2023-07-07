# Footwear E-commerce Website for Retail Owners

This repository contains the source code for a footwear e-commerce website that is designed specifically for retail owners. The website provides features to manage stock inventory, footwear sizes, and storage. It also includes an admin dashboard that displays earnings and allows retail owners to efficiently manage their business. Additionally, users can create accounts, add their favorite footwear to their wishlist, and contact retail owners for shipment.

## Table of Contents

- [Footwear E-commerce Website for Retail Owners](#footwear-e-commerce-website-for-retail-owners)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Features](#features)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)


## Description

This project aims to provide a comprehensive solution for retail owners in the footwear industry to manage their inventory, streamline the storage process, and effectively sell their products. The e-commerce website allows retail owners to showcase their footwear collection, manage stock availability and sizes, and track earnings through an intuitive admin dashboard.

## Features

- Stock management: Retail owners can easily manage their footwear inventory, update stock availability, and track sold items.
- Size management: The system allows retail owners to define footwear sizes and ensure accurate stock tracking.
- Storage management: Retail owners can organize their stock based on storage features, enabling efficient retrieval and management of footwear.
- Admin dashboard: Retail owners have access to a dedicated dashboard that provides insights into earnings, sales data, and stock levels.
- User accounts: Users can create accounts to access personalized features such as adding footwear to their wishlist and contacting retail owners for shipment.
- Wishlist functionality: Users can add their favorite footwear items to their wishlist for easy reference and potential future purchases.
- Contact retail owners: Users have the ability to directly contact retail owners for inquiries, orders, and shipment-related details.

## Requirements

Before running this application, ensure that you have the following prerequisites:

- Node.js (version 12 or higher)
- MongoDB (running locally or accessible remotely)

## Installation

1. Clone this repository to your local machine.

```bash
git clone https://github.com/SurendarSingh/Footwear-E-commerce.git
```


2. Navigate to the project directory.

```bash
cd Footwear-E-commerce
```

3. Install the dependencies by running the following command:

```bash
npm install
```
4. Create a `.env` file in the project root directory and specify the required environment variables. For example:

```plaintext
PORT=3000
MONGODB_URI=mongodb://localhost:27017/footwearDB
TOKEN_SECRET=secret
```

5. Replace MONGODB_URI with the appropriate MongoDB connection string. If you are running MongoDB locally, the default connection string is `mongodb://localhost:27017/footwearDB`.

## Usage

To run the application, execute the following command:

```bash
npm run app
```

The application will be accessible at `http://localhost:3000/`.

## Contributing

Contributions are welcome! To contribute, please follow these steps:

1. Fork this repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.