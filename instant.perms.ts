import type { InstantRules } from '@instantdb/react';

const rules = {
  // Set restrictive defaults for all collections
  "$default": {
    "allow": {
      "$default": "false",
      "view": "auth.id != null" // At minimum, require authentication to view any data
    }
  },
  
  // Profile permissions
  "profile": {
    "allow": {
      "view": "auth.id != null && auth.id in data.ref('$users.id')",
      "create": "auth.id != null", // Only authenticated users can create profiles
      "update": "auth.id != null && auth.id in data.ref('$users.id')", // Only profile owner can update
      "delete": "false" // Prevent profile deletion (or restrict to admins if needed)
    }
  },
  
  // Tasks permissions
  "tasks": {
    "allow": {
      "view": "auth.id != null && auth.id in data.ref('$users.id')",
      "create": "auth.id != null",
      "update": "auth.id != null && auth.id in data.ref('$users.id')",
      "delete": "auth.id != null && auth.id in data.ref('$users.id')"
    }
  },
  
  // For admin-only collections (if you have any)
  "admin_data": {
    "allow": {
      "view": "auth.id != null && auth.email in ['your-admin-email@example.com']",
      "create": "auth.id != null && auth.email in ['your-admin-email@example.com']",
      "update": "auth.id != null && auth.email in ['your-admin-email@example.com']",
      "delete": "auth.id != null && auth.email in ['your-admin-email@example.com']"
    }
  },
  
  // Restrict creating new attribute types
  "attrs": {
    "allow": {
      "create": "false" // Once your schema is stable, prevent new attribute types
    }
  }
} satisfies InstantRules;

export default rules;