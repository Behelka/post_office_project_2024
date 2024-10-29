const url = require('url');
const handleLocationRoutes = require('./AddLocationRoute'); // Adjust the path as necessary
const handleCustomerRoutes = require('./CustomerProfileRoute'); // Add other routes as necessary
const handlePackagePortalRoutes = require('./PackagePortalRoute');
const handleStopRoutes = require('./StopRoute');
const handleReportsRoute = require('./ReportsRoute');
const handleShopRoute = require('./ShopRoute');
const handleDepartmentRoute = require('./AddDepartmentRoute');


const appRoute = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const method = req.method;

    // Route handling
    if (parsedUrl.pathname.startsWith('/api/location')) {
        handleLocationRoutes(req, res);
    } else if (parsedUrl.pathname.startsWith('/api/customer')) {
        handleCustomerRoutes(req, res);
    } else if (parsedUrl.pathname.startsWith('/api/PackagePortal')){
        handlePackagePortalRoutes(req, res);
    } else if (parsedUrl.pathname.startsWith('/Stops')) {
        handleStopRoutes(req, res);
    } else if (parsedUrl.pathname.startsWith('/api/Reports')) {
        handleReportsRoute(req, res);
    } else if (parsedUrl.pathname.startsWith('/shop')) {
        handleShopRoute(req, res);
    } else if (parsedUrl.pathname.startsWith('/departments')) {
        handleDepartmentRoute(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Not Found' }));
    } 
};

module.exports = appRoute;

appRoute.js 
