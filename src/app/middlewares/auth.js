const jwt = require('jsonwebtoken');
const authconfig = require('../../config/auth.json');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

if (!authHeader)
    return res.status(401).send({ error: 'No token provided'});

    const parts = authHeader.split(' ');

    if (!parts.lenght === 2)
    return res.status(401).send({error: 'Token error'});

    const [ schema,token] =parts;

    if (!/Bearer$/i.test(schema));
        return res.status(401).send({ error: 'token malformatted'});

        jwt.verify(token, authconfig.secret, ( err, decoded) => {
          if (err) return res.status(401).send({ error: ' Token invalid'});

            req.userId = decoded.id;
            return next();

        });

};