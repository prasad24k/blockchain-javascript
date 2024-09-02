# Blockchain in JavaScript

This is a simple blockchain implementation in JavaScript, complete with mining, validation, and network synchronization.

## Features
- Block mining with adjustable difficulty
- Blockchain validation
- Peer-to-peer synchronization using Redis and Pub/Sub

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [Redis](https://redis.io/) installed on your machine.

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/prasad24k/blockchain-javascript.git
cd blockchain-javascript
#You can start the blockchain with:
npm install
#To start the blockchain in development mode:
npm run dev
#To start a peer node with a different port:
npm run dev-peer

#Use Postman API Endpoints
POST /api/mine: Add a new block with the data
{
"data":"new"
}


