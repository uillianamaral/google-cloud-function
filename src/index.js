const Firestore = require('@google-cloud/firestore');

exports.saveCar = async (req, res) => {
    try {
        if (req.method.toUpperCase() != 'POST') {
            return res.status(404).send({ message: 'Not Found' });
        }

        if (!req.body || !req.body.plaque || !req.body.color || !req.body.price || !req.body.model || !req.body.brand) {
            return res.status(400).send({ message: 'Informe os dados corretamente!' });
        }

        const { plaque, color, price, model, brand } = req.body;

        const firestore = new Firestore({
            projectId: 'atomic-graph-281200',
            keyFilename: './key.json',
        });

        const collection = firestore.collection('joaozinhosCar').doc(plaque);

        await collection.set({ plaque, color, price, model, brand });


        return res.status(201).send({ plaque, color, price, model, brand });
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
};

const Firestore = require('@google-cloud/firestore');

exports.findVehiclePlaque = async (req, res) => {
    try {

        if (req.method.toUpperCase() != 'GET') {
            return res.status(404).send({ message: 'Not Found' });
        }

        const { plaque } = req.query;

        const firestore = new Firestore({
            projectId: 'atomic-graph-281200',
            keyFilename: './key.json',
        });

        const collection = firestore.collection('joaozinhosCar');

        if (!plaque) {
            const allData = await collection.get();
            const data = [];
            allData.forEach(snap => {
                data.push(snap.data());
            });
            return res.status(200).send(data);
        }

        const query = await collection.where('plaque', '==', plaque).get();

        if (query.empty) {
            return res.status(404).send({ message: 'Not found any vehicle with this plaque!' });
        }

        const snapshot = query.docs[0];
        const data = snapshot.data();

        res.status(200).send(data);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
};
