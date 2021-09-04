export default function getHpLevel(health) {
    if (health < 2) {
        return 'critical';
    }
    if (health < 6) {
        return 'normal';
    }

    return 'high';
}
