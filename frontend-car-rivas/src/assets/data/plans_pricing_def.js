export const pricingData = {
  funcional: {
    title: "Entrenamiento Funcional",
    subtitle: "Grupos reducidos · Máximo 10 personas por sesión",
    includes: [
      "Entrenamiento 100% dirigido",
      "Grupos reducidos (max. 10 personas)",
      "Seguimiento por preparadores físicos titulados",
      "Parking gratuito y vestuarios (adaptados PMR)",
    ],
    plans: [
      { name: "Standard", sessions: "1 sesión / semana", price: "60", highlighted: false },
      { name: "Advance", sessions: "2 sesiones / semana", price: "95", highlighted: false },
      { name: "Pro", sessions: "3 sesiones / semana", price: "125", highlighted: true },
      { name: "Unlimited", sessions: "Ilimitado", price: "145", highlighted: false },
    ]
  },
  personal: {
    title: "Entrenamiento Personal",
    subtitle: "Atención individual · Resultados medibles",
    includes: [
      "Planificación individualizada",
      "Seguimiento y ajustes de cargas",
      "Prioridad de reserva en bonos",
    ],
    plans: [
      { name: "Sesión individual", price: "50", unit: "sesión" },
      { name: "Bono 4 sesiones", price: "185", unit: "bono" },
      { name: "Sesión individual + test físico (encoder)", price: "65", unit: "sesión" },
      { name: "Bono 4 sesiones + test con encoder", price: "245", unit: "bono" },
      { name: "Bono 10 sesiones", price: "450", unit: "bono" },
    ]
  },
  parejas: {
    title: "Personal en Parejas",
    subtitle: "Máximo 2 personas",
    plans: [
      { name: "Sesión suelta", price: "30", unit: "persona" },
      { name: "Bono 4 sesiones", price: "110", unit: "persona", highlighted: true },
      { name: "Bono 10 sesiones", price: "270", unit: "persona" },
    ]
  },
  futbolistas: {
    title: "Entrenamiento Futbolistas",
    subtitle: "Alto Rendimiento · Grupos reducidos",
    includes: [
      "Entrenamiento específico para futbolistas",
      "Grupos reducidos (max. 10 personas)",
      "Seguimiento por preparadores físicos titulados",
      "Optimización de la condición atlética",
    ],
    plans: [
      // Planes Mensuales (Grupales)
      { name: "Standard", sessions: "1 sesión / semana", price: "80", unit: "mes", highlighted: false },
      { name: "Pro", sessions: "2 sesiones / semana", price: "140", unit: "mes", highlighted: true },
      
      // Planes Individuales
      { name: "Sesión Individual", sessions: "Clase suelta", price: "50", unit: "sesión", highlighted: false },
      { name: "Bono Individual", sessions: "Bono 4 sesiones", price: "180", unit: "bono", highlighted: true },
    ]
  }
};