import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default icon issue with webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const Leadership = () => {
  const { t } = useTranslation();
  const leadershipEntries = t('leadership.entries', { returnObjects: true });

  const positions = {
    egypt: [30.0444, 31.2357],
    germany: [51.5136, 7.4653],
  };

  return (
    <section id="leadership" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          {t('leadership.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-96">
            <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={false} className="h-full rounded-lg shadow-lg">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={positions.egypt}>
                <Popup>
                  Leadership roles in Egypt.
                </Popup>
              </Marker>
              <Marker position={positions.germany}>
                <Popup>
                  Currently based in Germany.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadershipEntries.map((entry, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                    {entry.role}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {entry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
