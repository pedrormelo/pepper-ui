<script setup>
import { ref } from 'vue';
import { useTheme } from './composables/useTheme';
import Button from './components/ui/atoms/Button/Button.vue';
import Input from './components/ui/atoms/Input/Input.vue';
import Badge from './components/ui/atoms/Badge/Badge.vue';
import Navbar from './components/ui/organisms/Navbar/Navbar.vue';
import Sidebar from './components/ui/organisms/Sidebar/Sidebar.vue';

const { isDark, toggleTheme } = useTheme();
const query = ref('');
</script>

<template>
  <div class="min-h-screen">
    <Navbar
      brand="Pepper UI"
      :items="[{ label: 'Docs', href: '#' }, { label: 'Components', href: '#' }]"
    >
      <Button variant="ghost" size="sm" @click="toggleTheme">
        {{ isDark ? 'Light' : 'Dark' }}
      </Button>
    </Navbar>

    <div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 md:grid-cols-[240px_1fr]">
      <Sidebar
        title="Navigation"
        :items="[
          { key: 'atoms', label: 'Atoms' },
          { key: 'molecules', label: 'Molecules' },
          { key: 'organisms', label: 'Organisms' }
        ]"
      />

      <main class="space-y-6 rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
        <section class="space-y-4">
          <div class="flex items-center gap-3">
            <h1 class="text-2xl font-semibold">Design System Preview</h1>
            <Badge variant="success">Ready</Badge>
          </div>
          <Input v-model="query" placeholder="Search component..." type="search" />
        </section>
      </main>
    </div>
  </div>
</template>
