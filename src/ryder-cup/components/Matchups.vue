<template>
  <section class="matchups py-5">
    <div class="container">
      <h2 class="h1 text-center mb-5 text-primary">2025 Ryder Cup Matchups</h2>
      <p class="text-center lead mb-5">
        Showcasing our SCSS design system: Grid, Colors, Cards, Typography
      </p>

      <!-- Matchup Grid -->
      <div class="row gap-2">
        <div
          class="col-12-xs col-12-sm col-6-lg"
          v-for="matchup in matchups"
          :key="matchup.id"
        >
          <!-- Matchup Card -->
          <div class="card card-rounded-lg card-elevated-lg card-hover mb-4">
            <div class="card-body p-0">
              <!-- Match Info Header -->
              <div class="match-info">
                <h3 class="h6 text-gray mb-1">{{ matchup.format }} Match</h3>
                <p class="text-gray-light">
                  {{ matchup.date }} • {{ matchup.time }}
                </p>
              </div>

              <div class="row">
                <!-- USA Team Side -->
                <div class="col-6-xs bg-usa-primary-light-8 team-hover">
                  <div class="team-section">
                    <div class="team-header">
                      <span class="badge bg-usa-primary text-white mb-3"
                        >🇺🇸 TEAM USA</span
                      >
                    </div>
                    <div
                      class="player-card"
                      v-for="player in matchup.usaPlayers"
                      :key="player"
                    >
                      <p
                        class="text-usa-primary-dark-4 text-hover-usa-secondary tuey-body-2 mb-1"
                      >
                        {{ player }}
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Europe Team Side -->
                <div class="col-6-xs bg-eu-primary-light-8 team-hover">
                  <div class="team-section">
                    <div class="team-header">
                      <span class="badge bg-eu-primary text-white mb-3"
                        >🇪🇺 TEAM EUROPE</span
                      >
                    </div>
                    <div
                      class="player-card"
                      v-for="player in matchup.europePlayers"
                      :key="player"
                    >
                      <p
                        class="text-eu-primary-dark-4 text-hover-eu-secondary tuey-body-2 mb-1"
                      >
                        {{ player }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- VS Divider -->
              <div class="vs-divider">
                <span class="badge bg-error text-white">VS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const matchups = ref([
  {
    id: 1,
    format: "Foursomes",
    usaPlayers: ["Scottie Scheffler", "Sam Burns"],
    europePlayers: ["Rory McIlroy", "Matt Fitzpatrick"],
    date: "Sept 26",
    time: "8:00 AM",
  },
  {
    id: 2,
    format: "Four-ball",
    usaPlayers: ["Xander Schauffele", "Patrick Cantlay"],
    europePlayers: ["Jon Rahm", "Tyrrell Hatton"],
    date: "Sept 26",
    time: "1:15 PM",
  },
  {
    id: 3,
    format: "Foursomes",
    usaPlayers: ["Collin Morikawa", "Wyndham Clark"],
    europePlayers: ["Viktor Hovland", "Ludvig Åberg"],
    date: "Sept 27",
    time: "8:00 AM",
  },
  {
    id: 4,
    format: "Four-ball",
    usaPlayers: ["Brooks Koepka", "Dustin Johnson"],
    europePlayers: ["Shane Lowry", "Sepp Straka"],
    date: "Sept 27",
    time: "1:15 PM",
  },
  {
    id: 5,
    format: "Singles",
    usaPlayers: ["Scottie Scheffler"],
    europePlayers: ["Rory McIlroy"],
    date: "Sept 28",
    time: "11:00 AM",
  },
  {
    id: 6,
    format: "Singles",
    usaPlayers: ["Xander Schauffele"],
    europePlayers: ["Jon Rahm"],
    date: "Sept 28",
    time: "11:15 AM",
  },
]);
</script>

<style scoped>
.matchups {
  background: linear-gradient(
    to bottom,
    rgba(191, 10, 48, 0.05) 0%,
    rgba(0, 40, 104, 0.05) 100%
  );
}

.lead {
  font-size: 1.1rem;
  color: #666;
}

.match-info {
  text-align: center;
  padding: 1rem 1rem 0.5rem;
  background: white;
}

.match-info h3 {
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.match-info p {
  font-size: 0.875rem;
  margin-bottom: 0;
}

.text-gray-light {
  color: #999;
}

.team-hover {
  transition: all 0.3s ease;
}

.team-section {
  padding: 1.5rem 1rem;
  text-align: center;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.team-header {
  margin-bottom: 1rem;
}

.player-card {
  margin-bottom: 0.75rem;
}

.player-card p {
  transition: color 0.3s ease;
  cursor: pointer;
}

.vs-divider {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.card {
  position: relative;
  overflow: hidden;
}
</style>
