setInterval(() => {
  const ped = PlayerPedId();
  const health = GetEntityHealth(ped);

  console.log("Player health:", health);
}, 1000);
