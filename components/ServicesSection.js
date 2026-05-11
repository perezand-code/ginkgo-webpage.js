{services.map((service, index) => (
            <div key={`${tab}-${service.title}`} className="service-card-enter opacity-0">
            <div key={`${tab}-${service.title}`} className="service-card-enter">
              <ServiceCard service={service} commercial={tab === "commercial"} index={index} />
